import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div>
          <h2>We couldn't find that page sorry...</h2>
          <Link to="/">Returned to Homepage</Link>
        </div>
    );
}