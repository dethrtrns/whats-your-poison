const mongoose = require("mongoose");

const uri =
  "mongodb+srv://alex:rs9415315450@alex.txg9pe3.mongodb.net/coursedb?retryWrites=true&w=majority";
//connect to a Database, put the name here after slash....^
// this will also create a new database if it does not already exists!!!

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err) => console.error("Could not connect to MongoDb!!!", err));

// Define the Schema for your model(collection in layman's terms!!!) like below--->
const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now }, //<--note that this value if not provided, will automatically added by mongodb.
  isPublished: Boolean,
}); //this is basically like a blueprint of how each document of your collection should look like.

// now we create a model by specifying the name of the model as first argument and the above schema as the second argument.
//**note that we name the model here with Capitalized notation and also singular but mongoose will create a collection in your database automatically and name it in small letters and also pluralize it.go check the gui on atlas to see what happens)
const Course = mongoose.model("Course", courseSchema);
//This...^... now contains a pointer to your collection now.
//you can perform queries, add, delete etc using this.
//note that you could export this model from here and import it anywhere in any file and perform any operations on this collection/model.

/*#-->now as all operations with the database are async,
   So generally we follow this approach to create async functions for anything we want to do
   and also notice below, that you don't return anything from these functions coz then we'll have to await the function call as well,
   which we cannot do outside an async function!**feel free to ask me more about async await if you'd like.
   #->note that we typically send the response back wherever you see the console log. it's just for testing the operations for now.
*/

//here we add a new document to the model.
//Ideally we should modify this function to recieve the values from the caller as arguments for this function.
//but this is just to show clearly the concept of adding new document, you should modify it as per your requirments later.
const createCourse = async () => {
  const result = await new Course({
    name: "Nextjs",
    author: "Vercel",
    tags: ["react", "frontend", "backend", "node"],
    isPublished: true,
  }).save();
  console.log(result); //<--this is where we typically send back the response.
};

//this is to get all the documents in this collection.
//notice the commented out part after find()???
//yeah that's right, you can chain all this type of methods(and many more...check out the docs!) to refine or modify the returned result.
const getCourses = async () => {
  const courses = await Course.find();
  // .limit(10)
  // .sort({ name: 1 })
  // .select({ name: 1, tags: 1, _id: -1 });
  console.log(courses);
}; //try out all the chained modifier if you'd like.

//pretty self explainatory from here on!
const getCourse = async (id) => {
  const course = await Course.findOne({
    _id: new ObjectId(id),
  });
  console.log(course);
};

const updateCourse = async (id) => {
  const course = await Course.findByIdAndUpdate(
    id, //1st arg to find by id
    {
      $set: {
        name: "React.js",
        author: "Facebook",
        tags: ["javascript", "jsx"],
      },
    }, //2nd arg to edit the values if the document is found by the given id
    { new: true } //3rd arg, just hover over 'new' to see what it does! pretty COOL!
  );
  console.log(course);
};

const deleteCourse = async (id) => {
  const course = await Course.findByIdAndDelete(id);
  console.log(course);
};

// Now here we call the function which we wanna execute
// and comment out the rest of them,
// keep the atlas gui open in the side and refresh it every time you perform
// something here and see if the database is updated.
//#--> you can just copy the string if the object id from
//     atlas and pass it as argument of the function calls where it's required.

// getCourses();
// createCourse();
// getCourse("6408dd90d2f25d44ce3c3e98");
// updateCourse("6408dd90d2f25d44ce3c3e98");
// deleteCourse("6408dfe68d454ce0be74329d");

/**
 * TODO: now go to the terminal and put this 'node src\dbHelpers\mongoose.js'
 * and press enter.
 * you'll see that the db is connected and a running process.
 * so when you change something here in code and save nothing will show on console.
 * you'll have to terminate the process by pressing 'ctrl+c' then run the node command again.
 * Now play here for as long as you like,
 * then go to 'nowYouTry.js' file in the same folder as this file.
 */
