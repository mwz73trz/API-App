import { Note } from "../models/note.model";
import Notes from "./Notes";

interface IListNotesProps {
  notes: Note[];
}

const ListNotes: React.FC<IListNotesProps> = ({ notes }) => {
  return (
    <>
      <h2 className="mt-4">Notes</h2>
      <div>
        {notes.map((note) => (
          <Notes key={note.id} note={note} />
        ))}
      </div>
    </>
  );
};

export default ListNotes;
