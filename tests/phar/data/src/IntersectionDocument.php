<?php

class Head {}
interface Body {}
interface Footer {}

class IntersectionDocument
{
    public Head&Body $headAndBody;

    /**
     * @var Head&Body
     */
    public $headAndBodyPHPDoc;

    /**
     * @var IntersectionDocument
     */
    public Head&Body $headAndBodyPHPDocOverride;

    public function __construct(
        public Head&Body $baz,
    ) {}
}
