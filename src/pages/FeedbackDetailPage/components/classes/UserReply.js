import { uniqueID } from '../../../../utils/uniqueID';

export class UserReply {
  constructor(content, user, parentID, replyingTo, requestID) {
    this.content = content;
    this.user = user;
    this.parentID = parentID;
    this.replyingTo = replyingTo;
    this.requestID = requestID;
    this.commentID = uniqueID();
  }
}
