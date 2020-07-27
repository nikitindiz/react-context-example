import React, { useContext } from 'react';

import IsLoggedIn from '../context/isLoggedInContext';

const EvenMoreDeeplyNested = () => {
    const { isLoggedIn, toggleLogInValue } = useContext(IsLoggedIn);

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                {isLoggedIn ? 'User authenticated' : 'Please log in'}

                                <div>
                                    <button onClick={toggleLogInValue}>
                                        Toggle
                                    </button>
                                </div>
                            </div>

                            <div>
                                <IsLoggedIn.Consumer children={({ isLoggedIn }) => (
                                    <div>
                                        {isLoggedIn ? 'true' : 'false'}
                                    </div>
                                )} />
                            </div>

                            <div>
                                <IsLoggedIn.Consumer>
                                    {({ isLoggedIn }) => (
                                        <div>
                                            {isLoggedIn ? 'true' : 'false'}
                                        </div>
                                    )}
                                </IsLoggedIn.Consumer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvenMoreDeeplyNested;