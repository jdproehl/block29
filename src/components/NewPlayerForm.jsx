export default function newPlayerForm() {

    return (
    <div>
        <h1>New Player Form</h1>
        <form id="addNewPlayer">
            <div id="newPlayerDetails"></div>
            <label>
            Puppy's Name:
            <input type="text" name="name" />
            </label>
            <label>
            Puppy's Breed:
            <input type="text" name="breed" />
            </label>
            <label>
            Puppy's Game Day Status:
            <input type="text" name="status" />
            </label>
            <label>
            Puppy's Picture:
            <input type="text" name="imageUrl" />
            </label>
            <button class="button">Add Puppy to the Roster!</button>
         </form>
      </div>
    );
  }