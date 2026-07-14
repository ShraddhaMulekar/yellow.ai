import type { PriorityFilter, StatusFilter } from "../../../types/filter";

interface FilterBarProps {
  priority: PriorityFilter;
  status: StatusFilter;

  onPriorityChange: (value: PriorityFilter) => void;
  onStatusChange: (value: StatusFilter) => void;
}

const FilterBar = ({
  priority,
  status,
  onPriorityChange,
  onStatusChange,
}: FilterBarProps) => {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label">Priority</label>
        <select
          className="filter-select"
          value={priority}
          onChange={(e) => onPriorityChange(e.target.value as PriorityFilter)}
        >
          <option value="All">All Priorities</option>
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🔵 Low</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Status</label>
        <select
          className="filter-select"
          value={status}
          onChange={(e) => onStatusChange(e.target.value as StatusFilter)}
        >
          <option value="All">All Statuses</option>
          <option value="Open">🟢 Open</option>
          <option value="Assigned">🟣 Assigned</option>
          <option value="Resolved">⚪ Resolved</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
