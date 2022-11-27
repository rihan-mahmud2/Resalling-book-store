import React from "react";

const Blog = () => {
  return (
    <div className="my-10 mx-10">
      <div
        tabIndex={0}
        className="collapse mb-5 collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <div>
            The Four Kinds of React State to Manage When we talk about state in
            our applications, it’s important to be clear about what types of
            state actually matter. There are four main types of state you need
            to properly manage in your React apps:
            <ul type="circle" className="w-90 mx-auto">
              <li>Local State</li>
              <li>Global State</li>
              <li>Server state</li>
              <li>URL state</li>
            </ul>
          </div>

          <div>
            <h1 className="text-blue-500 text-center font-extrabold text-lg">
              Local (UI) state – Local state is data we manage in one or another
              component.
            </h1>
            <p className="text-center text-base">
              Local state is most often managed in React using the useState
              hook. For example, local state would be needed to show or hide a
              modal component or to track values for a form component, such as
              form submission, when the form is disabled and the values of a
              form’s inputs.
            </p>
          </div>
          <div className="mt-5">
            <h1 className="text-blue-500 text-center font-extrabold text-lg">
              Global (UI) state – Global state is data we manage across multiple
              components.
            </h1>
            <p className="text-center text-base">
              Global state is necessary when we want to get and update data
              anywhere in our app, or in multiple components at least. A common
              example of global state is authenticated user state. If a user is
              logged into our app, it is necessary to get and change their data
              throughout our application. Sometimes state we think should be
              local might become global.
            </p>
          </div>
          <div className="mt-5">
            <h1 className="text-blue-500 text-center font-extrabold text-lg">
              Server state – Data that comes from an external server that must
              be integrated with our UI state.
            </h1>
            <p className="text-center text-base">
              Server state is a simple concept, but can be hard to manage
              alongside all of our local and global UI state. There are several
              pieces of state that must be managed every time you fetch or
              update data from an external server, including loading and error
              state. Fortunately there are tools such as SWR and React Query
              that make managing server state much easier.
            </p>
          </div>
          <div className="mt-5">
            <h1 className="text-blue-500 text-center font-extrabold text-lg">
              URL state – Data that exists on our URLs, including the pathname
              and query parameters.
            </h1>
            <p className="text-center text-base">
              URL state is often missing as a category of state, but it is an
              important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL! There are undoubtedly more pieces
              of state that we could identify, but these are the major
              categories worth focusing on for most applications you build.
            </p>
          </div>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            prototypical work from up to down. Meaning that any property of
            upper side of object propery can be acccessed . As the child have
            the access of it's parent property of an object that's why it's
            called inheritance.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            prototypical work from up to down. Meaning that any property of
            upper side of object propery can be acccessed . As the child have
            the access of it's parent property of an object that's why it's
            called inheritance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
