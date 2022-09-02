import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge({length}) {
  return (
    <Badge badgeContent={length} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}