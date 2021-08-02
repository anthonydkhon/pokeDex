import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDownMenu = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Filter by Type
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Pokemon Types</DropdownItem>
        <DropdownItem value="Bug" onClick={props.handleClick}>Bug</DropdownItem>
        <DropdownItem value="Dragon" onClick={props.handleClick}>Dragon</DropdownItem>
        <DropdownItem value="Electric" onClick={props.handleClick}>Electric</DropdownItem>
        <DropdownItem value="Fighting" onClick={props.handleClick}>Fighting</DropdownItem>
        <DropdownItem value="Fire" onClick={props.handleClick}>Fire</DropdownItem>
        <DropdownItem value="Flying" onClick={props.handleClick}>Flying</DropdownItem>
        <DropdownItem value="Ghost" onClick={props.handleClick}>Ghost</DropdownItem>
        <DropdownItem value="Grass" onClick={props.handleClick}>Grass</DropdownItem>
        <DropdownItem value="Ground" onClick={props.handleClick}>Ground</DropdownItem>
        <DropdownItem value="Ice" onClick={props.handleClick}>Ice</DropdownItem>
        <DropdownItem value="Normal" onClick={props.handleClick}>Normal</DropdownItem>
        <DropdownItem value="Posion" onClick={props.handleClick}>Poison</DropdownItem>
        <DropdownItem value="Psychic" onClick={props.handleClick}>Psychic</DropdownItem>
        <DropdownItem value="Rock" onClick={props.handleClick}>Rock</DropdownItem>
        <DropdownItem value="Water" onClick={props.handleClick}>Water</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDownMenu;