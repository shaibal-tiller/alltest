
import React from 'react'

const index = () => {
  return (
    <div className="flex w-full">
  <div className="w-[30%] bg-gray-100 dark:bg-gray-800 p-6">
    <h2 className="text-lg font-semibold mb-4">Filters</h2>
    <div className="space-y-4">
      <div>
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="author"
        >
          Author
        </label>
        <button
          type="button"
          role="combobox"
          aria-controls="radix-:r2q:"
          aria-expanded="false"
          aria-autocomplete="none"
          dir="ltr"
          data-state="closed"
          className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        >
          <span style={{"pointer-events": "none"}}></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4 opacity-50"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <select
          aria-hidden="true"
          tabindex="-1"
          style={{position: "absolute", border: "'0px'", 'width': '1px', 'height': '1px', 'padding': '0px', 'margin': '-1px', 'overflow': 'hidden', 'clip': "rect('0px', '0px', '0px', '0px')", 'white-space': 'nowrap', 'overflow-wrap': 'normal'}}
        ></select>
      </div>
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Status
        </label>
        <div className="space-y-2">
          <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 font-normal">
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id="status-active"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style={{transform: 'translateX(-100%)', position: "absolute", 'pointer-events': 'none', opacity: 0, margin: '0px',}}
            />
            Active
          </label>
          <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 font-normal">
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id="status-archived"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style={{transform: 'translateX(-100%)', position: "absolute", 'pointer-events': 'none', opacity: 0, margin: '0px'}}
            />
            Archived
          </label>
          <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 font-normal">
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id="status-scheduled"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style={{transform: 'translateX(-100%)', position: "absolute", 'pointer-events': 'none', opacity: 0, margin: '0px',}}
            />
            Scheduled
          </label>
          <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 font-normal">
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id="status-all"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style={{transform: 'translateX(-100%)', position: "absolute", 'pointer-events': 'none', opacity: 0, margin: '0px',}}
            />
            All
          </label>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Date Range
        </label>
        <div className="flex items-center gap-2">
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="start-date"
            type="date"
          />
          <span>-</span>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="end-date"
            type="date"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="w-[70%] p-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        New Post
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="relative group overflow-hidden rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.06)]">
        <img
          src="/placeholder.svg"
          alt="Card Image"
          width="400"
          height="300"
          className="object-cover w-full h-48"
          style={{"aspect-ratio": '400 / 300', "object-fit": "cover"}}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-green-500">Active</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">John Doe</span>
          </div>
          <h3 className="text-lg font-semibold truncate">Stylish and Versatile Backpack</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Posted: May 15, 2024</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Expires: June 30, 2024</span>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 rounded-full bg-white/90 dark:bg-gray-950/90 p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          type="button"
          id="radix-:r2r:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <circle cx="12.1" cy="12.1" r="1"></circle>
          </svg>
        </button>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.06)]">
        <img
          src="/placeholder.svg"
          alt="Card Image"
          width="400"
          height="300"
          className="object-cover w-full h-48"
          style={{"aspect-ratio": '400 / 300', "object-fit": "cover"}}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <span className="text-sm font-medium text-yellow-500">Scheduled</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Jane Smith</span>
          </div>
          <h3 className="text-lg font-semibold truncate">Wireless Noise-Cancelling Headphones</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Posted: April 1, 2024</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Scheduled: May 1, 2024</span>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 rounded-full bg-white/90 dark:bg-gray-950/90 p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          type="button"
          id="radix-:r2t:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <circle cx="12.1" cy="12.1" r="1"></circle>
          </svg>
        </button>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.06)]">
        <img
          src="/placeholder.svg"
          alt="Card Image"
          width="400"
          height="300"
          className="object-cover w-full h-48"
          style={{"aspect-ratio": '400 / 300', "object-fit": "cover"}}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <span className="text-sm font-medium text-red-500">Archived</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Bob Johnson</span>
          </div>
          <h3 className="text-lg font-semibold truncate">Ergonomic Desk Chair for Home Office</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Posted: February 15, 2024</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Archived: March 31, 2024</span>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 rounded-full bg-white/90 dark:bg-gray-950/90 p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          type="button"
          id="radix-:r2v:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <circle cx="12.1" cy="12.1" r="1"></circle>
          </svg>
        </button>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.06)]">
        <img
          src="/placeholder.svg"
          alt="Card Image"
          width="400"
          height="300"
          className="object-cover w-full h-48"
          style={{"aspect-ratio": '400 / 300', "object-fit": "cover"}}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-green-500">Active</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">John Doe</span>
          </div>
          <h3 className="text-lg font-semibold truncate">Sleek and Durable Stainless Steel Water Bottle</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Posted: June 1, 2024</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Expires: August 31, 2024</span>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 rounded-full bg-white/90 dark:bg-gray-950/90 p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          type="button"
          id="radix-:r31:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <circle cx="12.1" cy="12.1" r="1"></circle>
          </svg>
        </button>
      </div>
      <div className="relative group overflow-hidden rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1),_0_2px_4px_rgba(0,0,0,0.06)]">
        <img
          src="/placeholder.svg"
          alt="Card Image"
          width="400"
          height="300"
          className="object-cover w-full h-48"
          style={{"aspect-ratio": '400 / 300', "object-fit": "cover"}}
        />
        <div className="p-4 bg-white dark:bg-gray-950">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <span className="text-sm font-medium text-yellow-500">Scheduled</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Jane Smith</span>
          </div>
          <h3 className="text-lg font-semibold truncate">Lightweight and Portable Camping Chair</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Posted: July 1, 2024</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Scheduled: August 15, 2024</span>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 rounded-full bg-white/90 dark:bg-gray-950/90 p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
          type="button"
          id="radix-:r33:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <circle cx="12.1" cy="12.1" r="1"></circle>
          </svg>
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center mt-6">
      <nav aria-label="pagination" className="mx-auto flex w-full justify-center" role="navigation">
        <ul className="flex flex-row items-center gap-1">
          <li className="">
            <li className="">
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
                aria-label="Go to previous page"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                <span>Previous</span>
              </a>
            </li>
          </li>
          <li className="">
            <li className="">
              <a
                className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center"
                href="#"
              >
                1
              </a>
            </li>
          </li>
          <li className="">
            <li className="">
              <a
                className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center"
                href="#"
              >
                2
              </a>
            </li>
          </li>
          <li className="">
            <li className="">
              <a
                className="whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center"
                href="#"
              >
                3
              </a>
            </li>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
  )
}

export default index
