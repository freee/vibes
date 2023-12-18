import * as React from 'react';
import { MdMoreHoriz } from 'react-icons/md';

const PagerBreak: React.FC = () => {
  return (
    <div className="vb-pager__break">
      <MdMoreHoriz aria-label="中略" />
    </div>
  );
};

export default PagerBreak;
