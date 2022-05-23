import { PubSub } from "graphql-subscriptions";
import { TypedPubSub } from "typed-graphql-subscriptions";
import { Link, Vote } from "@prisma/client";

// 1
export type PubSubChannels = {
    newLink: [{ createdLink: Link }];
    newVote: [{createdVote: Vote}]
};

// 2
export const pubSub = new TypedPubSub<PubSubChannels>(new PubSub());
