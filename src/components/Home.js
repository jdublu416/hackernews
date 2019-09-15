import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHeadlines, searchHeadlines } from '../actions/searchActions';

const Home = ({
  getHeadlines,
  searchResults: { headlines },
  searchHeadlines
}) => {
  const [text, setText] = useState('');
  useEffect(() => {
    getHeadlines();
  }, [getHeadlines]);

  const handleChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    searchHeadlines(text);
    setText('');
  };

  return (
    <Fragment>
      <h2 className='text-center large'>Popular Front Page Headlines: </h2>
      <div className='container'>
        <form className='form grid-2' onSubmit={onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search a topic...'
            value={text}
            onChange={handleChange}
          />
          <input type='submit' value='Go' className='btn btn-dark btn-block' />
        </form>
      </div>

      {headlines.map(headline => (
        <strong>
          <div className='container'>
            <div
              key={headline.ObjectId}
              className='card all-center text-dark my-1'
            >
              <h3>
                <strong>Title: </strong> {headline.title}
              </h3>
              <p>
                <strong>Author: </strong> {headline.author}
              </p>
              <a href={headline.url}>
                <strong style={{ color: 'red' }}>Read Article</strong>
              </a>
            </div>
          </div>
        </strong>
      ))}
      {}
    </Fragment>
  );
};

Home.propTypes = {
  getHeadlines: PropTypes.func.isRequired,
  searchResults: PropTypes.object.isRequired,
  searchHeadlines: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

export default connect(
  mapStateToProps,
  { getHeadlines, searchHeadlines }
)(Home);
