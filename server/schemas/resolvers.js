const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, args, context) => {
      console.log('adding thought:', {
        args
      })
      if (context.user) {
        const thought = await Thought.create({
          ...args,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateThought: async (parent, args, context) => {
      console.log('updating thought:', {
        args
      })

      // orignal way
      // if(hasUser){
      //   // do stuff
      // }

      // // new guard block way
      // if(!hasUser) return
      // if(!hasNamer) return
      // if(!hasTitle) return

      if (!context.user)  throw new AuthenticationError('You must be logged in to update reviews!');






        try{

          console.log('updating thought in db...')
          //~ MONGOOOSE DOES NOT USE THE { where: {} } OPERATOR
          //~ SEQUELIZE DOES
          const thought = await Thought.findOneAndUpdate({ _id: args.thoughtId }, {
            ...args,
            thoughtAuthor: context.user.username,
          },{
            new: true,
            returnDocument: 'after',
          });


          if(!thought){
            console.log('No thought was returned:', thought)
          }
          
          console.log('updating user thoughts in db...')
            await User.findOneAndUpdate(
              { _id: context.user._id },
              { $addToSet: { thoughts: thought._id } }
            );

          console.log('Yhoughts and user updated!')
            
            return thought;
          }catch(err){
            console.log(err)
          }
      

     
    },

    removeThought: async (parent, { thoughtId }, context) => {
      if (!context.user)  throw new AuthenticationError('You need to be logged in!');
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return true;
      
     
    },

  },
};

module.exports = resolvers;
