import mongoose from 'mongoose';


const MongoDBConnection = () => {
  return mongoose.connect(
    "mongodb+srv://abdulrehmaneugbs:OFlK6Fy3YkK3beXz@testdata.shbnntz.mongodb.net/test2"
  );
};

export default MongoDBConnection;
