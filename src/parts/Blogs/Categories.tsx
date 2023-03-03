import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const url = "https://django.kodaze.com/admin/blogs/category/";
    fetch("https://django.kodaze.com/admin/blogs/category/")
    .then(res=>res.json())
    .then(data=>setCategories(data))
  }, []);

  console.log(categories);

  return (
    <div>
      <div>categories</div>
    </div>
  );
}
