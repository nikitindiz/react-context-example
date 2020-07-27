import React from 'react';

import MoreDeeplyNested from './MoreDeeplyNested';

const DeeplyNested = () => (
    <div>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <MoreDeeplyNested />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DeeplyNested;