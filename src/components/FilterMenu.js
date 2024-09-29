import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons'; // Display icon

const FilterMenu = ({ setGroupBy, setOrderBy }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="filter-menu">
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          Display <FontAwesomeIcon icon={faDisplay} />
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <div className="grouping-section">
              <label>Group By: </label>
              <select onChange={e => setGroupBy(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="sorting-section">
              <label>Sort By: </label>
              <select onChange={e => setOrderBy(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterMenu;
