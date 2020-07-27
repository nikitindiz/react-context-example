import React from 'react';

import EvenMoreDeeplyNested from './EvenMoreDeeplyNested';

const MoreDeeplyNested = () => (
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <EvenMoreDeeplyNested />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MoreDeeplyNested;