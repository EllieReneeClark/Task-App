import "./dashboard.css";
import {auth,db} from "../firebase/config";
import {collection, addDoc, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Dashboard() {

    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState("");

    async function addNote() {
        const user = auth.currentUser;
        if (!user) {
            console.error("No user is currently signed in.");
            return;
        }

        if (!note.trim()) { return; }
        try {
            await addDoc(collection(db, "users", user.uid, "notes"), {
                text: note,
                createdAt: new Date()
            });

            console.log("Note added successfully!");
            setNotes([...notes, { text: note }]); // Update local state to show the new note immediately
            setNote(""); // Clear the input after adding the note  
        } catch (error) {
            console.error("Error adding note: ", error);
        }

    }

    const fetchNotes = async () => {
        const user = auth.currentUser;
        if (!user) {
            console.error("No user is currently signed in.");
            return;
        }
        // Fetch notes from Firestore for the current user
        const querySnapshot = await getDocs(collection(db, "users", user.uid, "notes"));

        //convert the querySnapshot to an array of note objects. each note object should have an id property (the document id) and the rest of the data from the document
        const notesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotes(notesList);
        };

        useEffect(() => {
            fetchNotes();
        }, []);

    return(
        <><div className="dashboard">
            <h1>Dashboard</h1>
            <p>This is the dashboard page. Here you can see your tasks and manage them.</p>
        </div><div className="dashboard-content">
                <p>Task management features will be implemented here in the future.</p>
                <input
                    type="text"
                    placeholder="Enter a note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
                <button onClick={addNote}>Add Note</button>
                <ul>
                    {notes.map((n) => (
                        <li key={n.id}>{n.text}</li>
                    ))}
                </ul>

            </div></>  
    );
}