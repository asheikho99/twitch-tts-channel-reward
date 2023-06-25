import { ApiClient } from "@twurple/api";
import { EventSubWsListener } from "@twurple/eventsub-ws";
import { EventSubChannelRedemptionAddEvent } from "@twurple/eventsub-base";
import { authProvider } from "./lib/authProvider";
import { BROADCASTER_ID, REWARD_ID } from "./env";

const apiClient = new ApiClient({ authProvider });
const listener = new EventSubWsListener({ apiClient });

const onChannelRedemptionAddForReward = listener.onChannelRedemptionAddForReward(
  BROADCASTER_ID,
  REWARD_ID,
  (data: EventSubChannelRedemptionAddEvent) => {
    console.log(
      `Reward: ${data.rewardTitle}
      \nReward ID: ${data.rewardId}
      \nRedeemed by: ${data.userDisplayName}
      \nUser ID: ${data.userId}`
    );
  }
);

listener.start();
