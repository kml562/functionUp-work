Mongoose Schema and Models
A Mongoose model is a wrapper of the Mongoose schema. A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.

Creating a Mongoose schema and models mainly consists of three parts:

1. Referencing Mongoose: This is the same as the one we used while connecting our database, which implies that defining Schema and Model does not require an explicit connection to the database.

let mongoose = require('mongoose');
const { Schema } = mongoose;
 

2. Schema Definition: We define a schema to decide the properties of the object, including default values, data types, if required, etc., 

const blogSchema = new Schema({
   // String is shorthand for {type: String}
   title:  String,
   date: { type: Date, default: Date.now },
   body:   String,
});
Here blogSchema defines a few basic properties for a blog. We've defined a property title and body of the String SchemaType, and property date that will be of a Date SchemaType, and its default value is set to Date.now, which provides a current date.

Currently, 10 SchemaTypes are allowed in Mongoose:

Array
Boolean
Buffer
Date
Mixed (A generic/flexible data type)
Number
ObjectId
String
Decimal 128
Map
 

3. Creating and Exporting a Model: To use the Schema defined, we need to convert blogSchema into a Model we can work with.

To do this, we will use the mongoose.model(<CollectionName>, <CollectionSchema>) function. This function accepts two parameters CollectionName ( name of the collection) CollectionSchema ( schema defined for the collection) and returns a mongoose Model object.