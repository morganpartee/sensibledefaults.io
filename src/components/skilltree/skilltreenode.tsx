import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface Props {
  className: string;
  iconStyle: { [key: string]: any };
  icon: React.ReactNode;
  header: string;
  subHeader?: string;
  body: string;
  id?: string;
}

export default function SkillTreeNode({ className, iconStyle, icon, header, subHeader, body, id }: Props) {

  return (
    <VerticalTimelineElement
      className={className}
      iconStyle={iconStyle}
      icon={icon}
      id={id}
    >
      <h3>{header}</h3>
      {subHeader && <h4>{subHeader}</h4>}
      <p>{body}</p>
    </VerticalTimelineElement>
  )
}
