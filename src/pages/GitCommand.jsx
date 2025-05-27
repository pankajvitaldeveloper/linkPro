import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa"; // Importing clipboard icon

const GitCommand = () => {
  const commands = [
    {
      title: "Initialize a Git Repository",
      command: "git init",
      description: "Start a new Git repository.",
    },
    {
      title: "Clone a Repository",
      command: "git clone <repo-url>",
      description: "Copy a remote repository to your local machine.",
    },
    {
      title: "Check Status",
      command: "git status",
      description: "View the status of your working directory.",
    },
    {
      title: "Stage Changes",
      command: "git add <file-or-folder>\ngit add .",
      description: "Add changes to the staging area.",
    },
    {
      title: "Commit Changes",
      command: 'git commit -m "your message"',
      description: "Save changes to the repository.",
    },
    {
      title: "View Commit History",
      command: "git log",
      description: "View the commit history of the repository.",
    },
    {
      title: "Create a New Branch",
      command: "git branch <branch-name>",
      description: "Create a new branch in the repository.",
    },
    {
      title: "Switch to a Branch",
      command: "git checkout <branch-name>",
      description: "Switch to an existing branch.",
    },
    {
      title: "Create & Switch to a New Branch",
      command: "git checkout -b <branch-name>",
      description: "Create and switch to a new branch.",
    },
    {
      title: "Merge a Branch",
      command: "git checkout main\ngit merge <branch-name>",
      description: "Merge a branch into the main branch.",
    },
    {
      title: "Delete a Branch",
      command: "git branch -d <branch-name>",
      description: "Delete a branch from the repository.",
    },
    {
      title: "Add Remote Repository",
      command: "git remote add origin <repo-url>",
      description: "Link a remote repository to your local repository.",
    },
    {
      title: "Push to Remote",
      command: "git push -u origin <branch-name>",
      description: "Push changes to the remote repository.",
    },
    {
      title: "Pull from Remote",
      command: "git pull origin <branch-name>",
      description: "Fetch and merge changes from the remote repository.",
    },
    {
      title: "Remove a File from Git (keep locally)",
      command: "git rm --cached <file>",
      description: "Untrack a file but keep it locally.",
    },
    {
      title: "Remove a File from Git and Disk",
      command: "git rm <file>",
      description: "Remove a file from Git and delete it locally.",
    },
    {
      title: "View Config",
      command: "git config --list",
      description: "View the Git configuration settings.",
    },
    {
      title: "Set Username and Email",
      command:
        'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"',
      description: "Set your Git username and email globally.",
    },
    {
      title: "Force Push (overwrite remote)",
      command: "git push --force",
      description: "Force push changes to the remote repository.",
    },
    {
      title: "Revert Last Commit (keep changes)",
      command: "git reset --soft HEAD~1",
      description: "Undo the last commit but keep changes staged.",
    },
    {
      title: "Revert Last Commit (discard changes)",
      command: "git reset --hard HEAD~1",
      description: "Undo the last commit and discard changes.",
    },
    {
      title: "Stash Changes",
      command: "git stash",
      description: "Save changes temporarily without committing.",
    },
    {
      title: "Apply Stashed Changes",
      command: "git stash apply",
      description: "Apply stashed changes back to the working directory.",
    },
    {
      title: "Delete Git History (fresh start)",
      command: 'rm -rf .git\ngit init\ngit add .\ngit commit -m "Fresh start"',
      description: "Delete Git history and start fresh.",
    },
    {
      title: "Unstage a File",
      command: "git reset <file>",
      description: "Unstage a file from the staging area.",
    },
    {
      title: "Restore File to Last Committed State",
      command: "git restore <file>",
      description: "Restore a file to its last committed state.",
    },
    {
      title: "Delete a Folder from GitHub",
      command:
        'git rm -r folder_name\ngit commit -m "Delete folder_name"\ngit push origin main',
      description: "Delete a folder from the repository and push changes.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [copiedCommand, setCopiedCommand] = useState(null);

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(index); // Set the index of the copied command
    setTimeout(() => setCopiedCommand(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">
        Essential Git Commands ({filteredCommands.length})
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search commands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCommands.map((cmd, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition flex items-center justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{cmd.title}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {cmd.description}
              </p>{" "}
              {/* Added description */}
              <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                {cmd.command}
              </pre>
            </div>
            <FaClipboard
              onClick={() => copyToClipboard(cmd.command, index)}
              className={`cursor-pointer text-2xl transition ${
                copiedCommand === index
                  ? "text-green-500"
                  : "text-blue-500 hover:text-blue-600"
              }`}
              title={copiedCommand === index ? "Copied!" : "Copy Command"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitCommand;
