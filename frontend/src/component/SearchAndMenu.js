import React from 'react'

export default function SearchAndMenu() {
    return (
        // eslint-disable-next-line
        <>
                <div className="container-fluid d-flex justify-content-center">
                    <form className="d-flex justify-content-center" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            size={66}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
          
        </>
    )
}


