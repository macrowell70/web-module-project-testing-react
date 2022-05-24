import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const testShow = {
    name: 'test show',
    image: null,
    summary: 'placeholder summary',
    seasons: [
        {id:0, name: "Season 1", episodes: []},
        {id:1, name: "Season 2", episodes: []}, 
        {id:2, name: "Season 3", episodes: []}, 
        {id:3, name: "Season 4", episodes: []}
    ]
}

test('renders without errors', () => {
    render(<Show show={testShow} selectedSeason={"none"}/>)
 });

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} selectedSeason={"none"}/>)
    const loader = screen.queryByTestId(/loading-container/i)

    expect(loader).not.toBeNull()
 });

test('renders same number of options seasons are passed in', () => {
    render(<Show show={testShow} selectedSeason={"none"}/>)
    const seasons = screen.queryAllByTestId(/season-option/i)

    expect(seasons).not.toBeNull()
    expect(seasons).toHaveLength(4)
 });

test('handleSelect is called when an season is selected', () => {
    const mockHandleSelect = jest.fn()

    render(<Show show={testShow} selectedSeason={"none"} handleSelect={mockHandleSelect} />)
    const seasonsDropdown = screen.queryByLabelText(/select a season/i)

    userEvent.selectOptions(seasonsDropdown, ["none"])

    expect(mockHandleSelect).toBeCalled()
 });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });
