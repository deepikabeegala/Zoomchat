import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
const { roomID } = useParams();
const meeting = async (element) => {
    const appID = 37310067;
    const serverSecret = "f194220c519bcc821e616903b24fdc06";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
       appID, serverSecret, roomID.trim(), Date.now().toString(), "deepika" 
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name : 'Copy Link',
            url: `http://localhost:3000/room/${roomID}` 
          }
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
        },
    });
};
  return <div>
    <div ref = { meeting } />
</div>;
};
export default Room;