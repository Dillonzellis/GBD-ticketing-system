import AddTask from "./AddTask";

type NewTaskProps = {
  selectedClientId: string | null;
};

export const NewTask = ({ selectedClientId }: NewTaskProps) => {
  return (
    <div>
      <div>New Task Component</div>
      {/* Client Name */}
      {/* Display selected client name */}
      <div>Client Name: {selectedClientId}</div>
      {/* This Months Tasks */}
      {/* Retrieve Client Name */}
      <div className="mb-12">This Months Tasks</div>
      {/* Add Task Component */}
      <AddTask selectedClientId={selectedClientId} />
    </div>
  );
};

// export default NewTask;
