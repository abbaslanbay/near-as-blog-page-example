import {createBlog,getById,getAll,del} from "../index";

import {Blog, blogs} from "../model";


describe('contract methods', () => {

    it("create a new blog", () => {
        const blog = createBlog("Title","Description","http://localhost/","Near Team")
        expect(blogs.getSome(blog.id)).toStrictEqual(blog)
    })

    it("get all Blogs", () => {
        const blogs = new Array<number>(100)
        .fill(0)
        .map<Blog>((_, i) => Blog.createBlog('title' + i.toString(),"Description" + i.toString(),"http://localhost/" + i.toString(),"Near Team"))
      expect(getAll(20)).toStrictEqual(blogs.slice(20, 30));
    })

    it("get blog one by id",() => {
        const a = Blog.createBlog("Title","Description","http://localhost/1","Near Team")
        const b = Blog.createBlog("Title 2","Description 3","http://localhost/2","Near Team")
        const c = Blog.createBlog("Title 3","Description 3","http://localhost/3","Near Team")
        expect(getById(a.id)).toStrictEqual(a);
        expect(getById(b.id)).toStrictEqual(b);
        expect(getById(c.id)).toStrictEqual(c);
    })

    itThrows("delete blog one", () => {
        const blog = Blog.createBlog("Title","Description","http://localhost/1","Near Team");
        del(blog.id);
        Blog.getById(blog.id)
    })



});
