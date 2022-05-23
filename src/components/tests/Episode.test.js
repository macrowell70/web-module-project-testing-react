import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';



const testEpisode = {
    id: 553946,
    image: null,
    summary: 'Placeholder summary',
}

test("renders without error", () => {
    render(<Episode episode={testEpisode} />)
 });

test("renders the summary test passed as prop", () => {
    render(<Episode episode={testEpisode} />)
    const summary = screen.queryByText(/placeholder summary/i)

    expect(summary).toBeInTheDocument()
    expect(summary).not.toBeNull()
    expect(summary).toBeTruthy()
 });

test("renders default image when image is not defined", () => {
    render(<Episode episode={testEpisode} />)
    const altImg = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')

    expect(altImg).not.toBeNull()
 });
