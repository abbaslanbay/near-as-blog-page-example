// contract/assembly/model.ts
import { PersistentUnorderedMap, math } from "near-sdk-as";

export const blogs = new PersistentUnorderedMap<u32, Blog>("blogs");

@nearBindgen
export class Blog {
  id: u32;
  title: string;
  desc: string;
  url: string;
  author:string;
  isDeleted: bool;

  constructor(title: string,desc: string,url : string,author:string) {
    this.id = math.hash32<string>(title);
    this.title = title;
    this.url = url;
    this.desc = desc;
    this.author = author;
    this.isDeleted = false;
  }

  static createBlog(title: string,desc: string,url : string,author:string): Blog {
    const blog = new Blog(title,desc,url,author);
    blogs.set(blog.id, blog);
    return blog;
  }
  static getById(id: u32): Blog {
    return blogs.getSome(id);
  }
  static getAll(offset: u32, limit: u32): Blog[] {
    return blogs.values(offset, offset + limit);
  }
  static findByIdAndDelete(id: u32): void {
    blogs.delete(id);
  }
}