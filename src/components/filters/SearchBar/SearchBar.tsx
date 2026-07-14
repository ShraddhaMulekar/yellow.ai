
interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
    return (
        <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
                className="search-input"
                type="text"
                placeholder="Search name, email, subject..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;