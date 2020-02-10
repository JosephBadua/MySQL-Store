# MySQL-Store
Welcome to the Black Market. Peruse our wears but if anyone asks, you didn't see nuffin. Capiche?

MySQL store can only be accessed through node.js. It requires several node packages to work and a preconfigured MySQL from your local machine. 

## Installation and Getting Started

Using Git for Windows/Terminal for Mac, clone the repository into your local machine using the following command:

```bash
git clone [repository]
```

After it is downloaded, change directories into the project folder and install its necessary dependecies

```bash
npm install
```

Then, insert the following schema into your MySQL workbench. The schema and seeds will be available within the project. New data can be added from the Node CLI.

## Overview and Features
From your node enviornment, run either command:

```bash
node bamazonCustomer.js
```

or

```bash
node bamazonManager.js
```
If you choose to run bamazonCustomer.js you will see a list of items from our inventory, and through the inquirer npm, you will able to choose which product you wish to purchase and how much. Each product has a listing price, but don't worry, there is no money being exchanged. It will then calculate how much your total pruchase was then exit.

If you choose to run bamazonManager.js, you will be able to add new items to the store. You can then choose what product, how much in our current inventory, and how much it will cost. You can also add new stock to our current products if they are low on inventory.



## Technologies Used

MySQL           |  Node.js |  Express  |  
:-------------------------:|:-------------------------: |:-------------------------: 
![MySQL](https://cdn.worldvectorlogo.com/logos/mysql.svg)  |  ![node](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png)  |  ![Express](https://qph.fs.quoracdn.net/main-qimg-f406db5658b5d0dade4d70a989560439)

<ul style="font-size: 20px;">
<li><a href="https://www.npmjs.com/package/inquirer">Inquirer</a> was used to have users interact with the application through the Node CLI</li>
<li><a href="https://expressjs.com/">Express.js</a> is a web framework that we used to build our server.</li>
<li><a href="https://nodejs.org/en/">Node.js</a> is the development environment we used to build our application.</li>
<li><a href="https://www.mysql.com//">MySQL</a> is what we used to house our data in databases in the form of tables.</li>
</ul>


## Project Creator and Maintainer

#### Joseph Badua
<ul style="font-size: 20px;">
  <li><a href="https://github.com/JosephBadua">Github</a></li>
  <li><a href="https://www.linkedin.com/in/joseph-badua-60aaa7188/">LinkedIn</a></li>
  <li><a href="http://www.josephbadua.com/">Portfolio</a></li>
</ul>
