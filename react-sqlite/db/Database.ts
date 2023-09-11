import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("contacts.db");

export const initDatabase = () => {
  db.transaction((conn) => {
    conn.executeSql(
      "CREATE TABLE IF NOT EXISTS contacts (_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT);",
      [],
      () => console.log("Tabela contacts criada com sucesso."),
      (error) => {
        console.log("Exception: " + error);
        return false;
      }
    );
  });
};

export const addContact = (name: string, phone: string) => {
  db.transaction((conn) => {
    conn.executeSql(
      "INSERT INTO contacts (name, phone) VALUES (?, ?);",
      [name, phone],
      () => console.log("Contato inserido com sucesso !"),
      (error) => {
        console.log("Exception: " + error);
        return false;
      }
    );
  });
};

export const deleteContact = (id: number) => {
    return new Promise<void>((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM contacts WHERE _id = ?;',
          [id],
          () => resolve(),
          (error) => {
            console.log("Exception: " + error);
            return false;
          }
        );
      });
    });
  };

export const getContacts = () => {
  return new Promise<{ _id: number; name: string; phone: string }[]>(
    (resolver, reject) => {
      db.transaction((conn) => {
        conn.executeSql("SELECT * FROM contacts;", [], (_, result) =>
          resolver(result.rows._array)
        );
      });
    }
  );
};
