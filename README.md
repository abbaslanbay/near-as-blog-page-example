
# Near Protocol Blog Example

Simple blog page
In this project, I ran the simple blog page logic made in Web2, some of it on Web3.
- Can add new blog
- Can list blogs
- If you are a blogger, you can delete your own post.

 
## Features

- List Blogs
- Create New Blog
- Remove Blog


## Used By

This project is used by the following companies:

- Near Sdk AssemblyScript
- React.Js near-api-js library

## Screenshots

![App Screenshot](https://gateway.pinata.cloud/ipfs/QmXzgTRQMT8Gx4NDb2AkENkMeiAju9SgnzvgsZKFrzdCfP)



## Contract Functions
#### Get all items

```http
   getAll
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `offset` | `integer` | **Required**. Default : 1 |
| `limit` | `integer` | **Required**. Default : 10 |

#### Get item

```http
  GetById
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Create New

```http
  createBlog
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Blog Title 
| `desc`      | `string` | **Required**. Blog Description 
| `url`      | `string` | **Required**. Blog Image Url 
| `author`      | `string` | **Required**. Must be walletId **(abbaslanbay.testnet)**

## Deployment

To deploy contract

```bash
  npm run dev
```
To test contract functions

```bash
  npm run test
```

**Frontend :**

```bash
 cd frontend && npm start
```
## Feedback

If you have any feedback, please reach out to us at abbaslanbay@gmail.com


## Installation

Install near-as-blog-page-example with npm

```bash
  npm install
  cd frontend
  npm install
```
    
## 🚀 About Me
I'm a full stack developer since 2014.

A human who is passionate about coding and learning. He lives in the hope that he can change something in this world. 
He lives English.

## 🛠 Skills
Javascript, Typescript, Solidity, HTML, CSS, Vue.js, Angular, Node.js, Laravel, MongoDB, MySQL, DynamoDB, Socket, AWS, AWS Chime, WebRTC, Serverless, Linux systems, React.Js,
React Native, PostgreSQL, PHP, Laravel.
