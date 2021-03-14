import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import CodeIcon from '@material-ui/icons/Code';
import 'react-vertical-timeline-component/style.min.css';
interface Props {
  iconStyle?: { [key: string]: any };
  icon?: React.ReactNode;
  title: string;
  subTitle?: string;
  body: string;
  link?: string;
}

export default function SkillTreeNode({ iconStyle, icon, title, subTitle, body, link }: Props) {

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#eee', color: '#000', cursor: link && 'pointer' }}
      contentArrowStyle={{ borderRight: '7px solid #ccc' }}
      iconStyle={iconStyle || { background: '#eee', color: '#333' }}
      className="vertical-timeline-element--work"
      icon={icon || <CodeIcon />}
      >
      <h3 data-href={link}>{title}</h3>
      {subTitle && <h4>{subTitle}</h4>}
      <p>{body}</p>
    </VerticalTimelineElement>
  )
}
