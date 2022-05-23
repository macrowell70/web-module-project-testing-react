import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';

const testShow = {
    name: 'test show',
    image: null,
    summary: 'placeholder summary',
    seasons: [{id: 0, name: "Season 1", episodes: []}]
}

test('renders without errors', () => {
    render(<Show show={testShow} selectedSeason={"none"}/>)
 });

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} selectedSeason={"none"}/>)
    const loader = screen.queryByTestId(/loading-container/i)

    expect(loader).not.toBeNull()
 });

test('renders same number of options seasons are passed in', () => { });

test('handleSelect is called when an season is selected', () => { });

test('component renders when no seasons are selected and when rerenders with a season passed in', () => { });
