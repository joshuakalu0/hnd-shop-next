"use server";

export async function onLoginSubmit(event) {
  event.preventDefault();
  print(event);

  const formData = new FormData(event.target);
  //   const response = await fetch("/api/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   // Handle response if necessary
  //   const data = await response.json();
  //   // ...
}
