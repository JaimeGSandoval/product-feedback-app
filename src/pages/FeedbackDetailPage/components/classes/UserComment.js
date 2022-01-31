import { uniqueID } from '../../../../utils/uniqueID';

export class UserComment {
  constructor(content, user) {
    this.commentID = uniqueID();
    this.parentID = null;
    this.content = content;
    this.user = user;
    this.replies = [];
  }
}
