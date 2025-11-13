import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Blog = {
	title: string;
	date: Date;
	description: string; // for preview
	image: string; // url for string in public
	image_alt: string; // alt for image
	slug: string; 
    //comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<Blog>(
    {
		title: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		image: { type: String, required: true },
	    image_alt: { type: String, required: true },
		//content: { type: String, required: true },
        slug: { type: String, required: true },
    },
    { collection: "Blogs" 
    }
)

// defining the collection and model
const Blog = mongoose.models['Blogs'] ||
    mongoose.model('Blogs', blogSchema);

export default Blog;