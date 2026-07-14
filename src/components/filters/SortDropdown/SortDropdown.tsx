import type { SortOption } from "../../../types/sort";

interface SortDropdownProps {
  sort: SortOption;
  onSortChange: (value: SortOption) => void;
}

function SortDropdown({
  sort,
  onSortChange,
}: SortDropdownProps) {
  return (
    <label>
      Sort By:

      <select
        value={sort}
        onChange={(e) =>
          onSortChange(e.target.value as SortOption)
        }
      >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="Priority">Priority</option>
        <option value="SLA">SLA Remaining</option>
      </select>
    </label>
  );
}

export default SortDropdown;