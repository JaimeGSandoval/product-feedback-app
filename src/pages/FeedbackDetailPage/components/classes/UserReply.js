import { uniqueID } from '../../../../utils/uniqueID';

export class UserReply {
  constructor(content, user, parentID, replyingTo) {
    this.replyID = uniqueID();
    this.parentID = parentID;
    this.content = content;
    this.user = user;
    this.replyingTo = replyingTo;
    this.replies = [];
  }
}
