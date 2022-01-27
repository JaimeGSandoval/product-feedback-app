import { uniqueID } from '../../../utils/uniqueID';

export class ProductRequest {
  constructor(title, category, description) {
    this.requestID = uniqueID();
    this.title = title;
    this.category = category;
    this.description = description;
    this.upvotes = 0;
    this.upvoted = false;
    this.status = 'suggestion';
    this.comments = [];
  }
}
