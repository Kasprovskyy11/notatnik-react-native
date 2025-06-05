import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Note {
  id: number;
  title: string;
  content: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (id: number) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => setNotes((prev) => [...prev, note]);
  const removeNote = (id: number) =>
    setNotes((prev) => prev.filter((note) => note.id !== id));

  return (
    <NotesContext.Provider value={{ notes, addNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes must be used within NotesProvider");
  return context;
};
