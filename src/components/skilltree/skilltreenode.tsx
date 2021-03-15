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
      contentStyle={{ background: '#eee', color: '#000' }}
      contentArrowStyle={{ borderRight: '10px solid #ddd' }}
      iconStyle={iconStyle || { background: '#fff', color: '#333', "box-shadow": "0 0 0 4px #aaa, inset 0 2px 0 rgba(0, 0, 0, 0.12), 0 3px 0 4px rgba(0, 0, 0, 0.08)" }}
      className="vertical-timeline-element--work"
      icon={icon || <CodeIcon />}
      >
      <h3 data-href={link}>{title}</h3>
      {subTitle && <h4>{subTitle}</h4>}
      <p>{body}</p>
    </VerticalTimelineElement>
  )
}
