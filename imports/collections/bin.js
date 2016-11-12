import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function(){ //this指定Global: Meteor的userId
        return Bins.insert({ //return bin._id
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId //In Meteor: The user's id who current sign in.
        });
    },
    'bins.remove': function(bin){
        return Bins.remove(bin);
    },
    'bins.update': function(bin, newcontent){
        return Bins.update(bin._id, { $set: { content: newcontent }});
    },
    'bins.share': function(bin, email){
        return Bins.update(bin._id, { $push: { sharedWith: email }}); //push new item in array
    }
});
export const Bins = new Mongo.Collection('bins');