// contract/assembly/index.ts
import { Blog } from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.
export function createBlog(title: string,desc: string,url : string, author: string): Blog {
  return Blog.createBlog(title,desc,url,author);
}

export function getById(id: u32): Blog {
  return Blog.getById(id);
}

export function getAll(offset: u32, limit: u32 = 10): Blog[] {
  return Blog.getAll(offset, limit);
}

export function del(id: u32): void {
  Blog.findByIdAndDelete(id);
}