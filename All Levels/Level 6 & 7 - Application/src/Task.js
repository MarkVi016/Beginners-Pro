// constructor of task object
export default function Task(title, description) {
  this.done = false;
  this.title = title;
  this.description = description;
}