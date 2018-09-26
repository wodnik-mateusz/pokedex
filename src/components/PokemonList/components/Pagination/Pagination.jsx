import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bs from 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../../../shared/Spinner/Spinner';

const Pagination = class Pagination extends Component {
  handleRequests = (value = 1) => {
    const {
      pages,
      page,
      changePage,
      getListRequest,
    } = this.props;

    if (pages[page + value]) {
      changePage(page + value);
    } else {
      getListRequest(page + value);
    }
  };

  render() {
    const { isLoading } = this.props;
    return (
      <nav>
        <ul className={bs.pagination}>
          <li className={bs['page-item']}>
            <button className={bs['page-link']} type="button" onClick={() => this.handleRequests(-1)}>Previous</button>
          </li>
          <li className={bs['page-item']}>
            <button className={bs['page-link']} type="button" onClick={() => this.handleRequests(1)}>Next</button>
          </li>
          {isLoading && (
            <li className={bs['page-item']}>
              <span className={bs['page-link']} style={{ height: '100%', width: '50px' }}>
                <Spinner />
              </span>
            </li>
          )}
        </ul>
      </nav>
    );
  }
};

Pagination.defaultProps = {
  pages: {},
  page: 1,
  getListRequest: () => null,
  changePage: () => null,
  isLoading: false,
};

Pagination.propTypes = {
  pages: PropTypes.objectOf(PropTypes.array),
  page: PropTypes.number,
  getListRequest: PropTypes.func,
  changePage: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Pagination;
