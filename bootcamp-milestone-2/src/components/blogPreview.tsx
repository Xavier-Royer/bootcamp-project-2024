import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPreview(props: any) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    
    
    
    /*<div className={style.div}>
      <h3> Blog Name </h3>
      <div>
        // <img src={props.image} alt="img" />
				// we will replace img with Image, made to optimize images produced with Next.js
				<Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image>
        <p>Blog description</p>
				<p>Posted on...</p>
      </div>
	  </div>
    */
    <>
      <h2>
        <Link href={`/blog/${props.slug}`}>{props.title}</Link>;
      </h2>
      <span className="post-container">
        <span className="description-container">
          <h3>Description:</h3>
          <div>
            {props.description}
            <div>{props.date}</div>
          </div>
        </span>

        <div className="image-container">
          <img src={props.image} alt={props.imageAlt} />
        </div>
      </span>
    </>

   /* const title = document.createElement("h2");
    title.textContent = blog.title;
    blogPostContainer.appendChild(title);

    const container = document.createElement("span");
    container.className = "post-container";
    blogPostContainer.appendChild(container);

    const descriptionContainer = document.createElement("span");
    descriptionContainer.className = "description-container";
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const descriptionHeader = document.createElement("h3");
    descriptionHeader.textContent = "Description:";

    const description = document.createElement("div");
    description.textContent = blog.description;

    const date = document.createElement("div");
    date.textContent = blog.date;

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(description);
    description.appendChild(date);

    imageContainer.appendChild(image);

    container.appendChild(descriptionContainer);
    container.appendChild(imageContainer);
    */
  );
}